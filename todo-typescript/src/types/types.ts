export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodosState = {
  list: Todo[];
  loading: boolean;
  error: string | null;
};
