
class ZerodhaAdapter {
  constructor(token) {
    this.token = token;
  }
  async fetchTrades() {
    return [
      { scrip: "INFY", qty: 10, price: 1500, ts: "2025-09-01T10:00:00Z" },
      { scrip: "TCS", qty: 5, price: 3500, ts: "2025-09-01T11:00:00Z" }
    ];
  }
}
module.exports = ZerodhaAdapter;
