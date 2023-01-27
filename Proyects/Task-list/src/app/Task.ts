//to use my 'DB'
import { TASKS } from "./mock-task";

export interface Task{
    id: number;
    text: string;
    day:string;
    reminder:boolean
}