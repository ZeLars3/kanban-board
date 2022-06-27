import { ITask } from './task.interface';

export interface IBoard {
  id: string,
  title: string,
  priority: number,
  tasks?: ITask[]
}

