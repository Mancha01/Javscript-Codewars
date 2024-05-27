function topKFrequent(nums: number[], k: number): number[] {
  const count: { [key: number]: number } = {};
  const freq: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const n of nums) {
    count[n] = 1 + (count[n] || 0);
  }

  for (const [n, c] of Object.entries(count)) {
    freq[c].push(parseInt(n, 10));
  }

  const res: number[] = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
}
