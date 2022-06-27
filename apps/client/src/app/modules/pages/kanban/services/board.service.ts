import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs';
import firebase from 'firebase/compat/app';

import { IBoard } from '../models';

@Injectable()
export class BoardService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
  }

  public async createBoard(data: IBoard): Promise<IBoard> {
    const user = await this.angularFireAuth.currentUser;
    const board = {
      ...data,
      uid: user.uid,
      tasks: [],
      createdAt: new Date().toISOString()
    };
    const doc = await this.firestore.collection('boards').add(board);
    return {...board, id: doc.id};
  }

  public deleteBoard(boardId: string): Promise<void> {
    return this.firestore.doc(`boards/${boardId}`).delete();
  }

  public updateTasks(boardId: string, tasks: Task[]): Promise<void> {
    return this.firestore
      .collection('boards')
      .doc(boardId)
      .update({
        tasks
      });
  }

  public removeTask(boardId: string, task: Task): Promise<void> {
    return this.firestore
      .collection('boards')
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task)
      });
  }

  public getUserBoards() {
    return this.angularFireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore
            .collection<IBoard>('boards', (ref) =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({idField: 'id'});
        } else {
          return [];
        }
      })
    );
  }

  public sortBoards(boards: IBoard[]): IBoard[] {
    return boards.sort((a, b) => a.priority - b.priority);
  }
}
