import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { ISnackbar } from '../models';
import { SnackbarType } from '../enums';
import { SNACKBAR_DELAY } from '../constans';

@Injectable()
export class SnackbarService {
  private snackbars$: BehaviorSubject<ISnackbar[]> = new BehaviorSubject<ISnackbar[]>([]);

  public getSnackbars(): Observable<ISnackbar[]> {
    return this.snackbars$.asObservable();
  }

  public createSuccessSnackbar(message: string): void {
    this.createSnackbar(SnackbarType.SUCCESS, message);
  }

  public createErrorSnackbar(message: string): void {
    this.createSnackbar(SnackbarType.ERROR, message);
  }

  public creteInfoSnackbar(message: string): void {
    this.createSnackbar(SnackbarType.INFO, message);
  }

  public creteWarningSnackbar(message: string): void {
    this.createSnackbar(SnackbarType.WARNING, message);
  }

  public removeSnackbar(snackbarId: string): void {
    this.filterSnackbars(snackbarId);
  }

  private generateId(): string {
    return uuidv4();
  }

  private createSnackbar(type: SnackbarType, message: string): void {
    const alert = {
      id: this.generateId(),
      autoClose: true,
      type,
      message,
    };

    this.snackbars$.next([...this.snackbars$.value, alert])

    if (alert.autoClose) {
      setTimeout(() => {
        this.filterSnackbars((alert.id))
      }, SNACKBAR_DELAY)
    }
  }

  private filterSnackbars(snackbarId: string): void {
    this.snackbars$.next([
      ...this.snackbars$.value.filter((snackbar: ISnackbar) => snackbar.id !== snackbarId)
    ]);
  }
}
