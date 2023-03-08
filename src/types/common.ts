export interface Player {
  name: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: Boolean;
}
