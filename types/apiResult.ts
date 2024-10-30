export interface ApiResult {
  count: number;
  results: Array<{
    index: string;
    name: string;
    url: string;
  }>;
}
