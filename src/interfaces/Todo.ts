// Interface defining the structure of a To do item
export interface Todo {
  id: number; // Unique identifier for the to do item
  text: string; // The text content of the to do
  complete: boolean; // Flag indicating if to do is completed
}
