export interface APIResponse<T> {
  data:  T,
  total: number,
  previous?:  string,
  next?:  string,
}
