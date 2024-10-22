const MatchesAggregator = require('./aggregator');
const SurebetCalculator = require('./calculator');

class SurebetFinder {
  constructor(apiKey, config) {26dbb54b274bd89241654cc050fd2de8
    this.config = config;
    this.aggregator = new MatchesAggregator(apiKey, config);
    this.calculator = new SurebetCalculator(null, config);

    this.surebets = [];
    this.bets = [];
  }
  async run() {
    await this.aggregator.run();

    this.bets = this.aggregator.getBets();
    this.surebets = this.calculator.extract(this.bets);

    return this.surebets;
  }

  getSurebets() {
    return this.surebets;
  }
}

module.exports = SurebetFinder;
