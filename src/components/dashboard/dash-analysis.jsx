import React, { Component } from 'react';

export default class DashAnalysis extends Component {

  doMath() {
    let budgetStatus = '';
    let totalRevenue = this.props.financialData.annual_revenue_water_sales + this.props.financialData.annual_revenue_fees_charged + this.props.financialData.annual_revenue_subsidies;
    let totalCosts = this.props.financialData.annual_personnel_costs + this.props.financialData.annual_operations_costs + this.props.financialData.annual_debt_costs;
    let revCostDiff = totalRevenue - totalCosts;
    if (revCostDiff >= 0) {
      budgetStatus = 'Annual Budget Surplus:';
      return { totalRevenue, totalCosts, revCostDiff, budgetStatus };
    } else {
      budgetStatus = 'Annual Budget Deficit:';
      return { totalRevenue, totalCosts, revCostDiff, budgetStatus };
    }
  }

  renderCriticalInfrastructureName() {
    return this.props.criticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[0]}</li>;
    });
  }

  renderCriticalInfrastructureUsefulLife() {
    return this.props.criticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[2]}</li>;
    });
  }

  renderCriticalInfrastructureAnnualContribution() {
    return this.props.criticalInfrastructure.map((element, i) => {
      return <li key={i}>${element[3]}</li>;
    });
  }

  renderNoncriticalInfrastructureName() {
    return this.props.noncriticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[0]}</li>;
    });
  }

  renderNoncriticalInfrastructureUsefulLife() {
    return this.props.noncriticalInfrastructure.map((element, i) => {
      return <li key={i}>{element[2]}</li>;
    });
  }

  renderNoncriticalInfrastructureAnnualContribution() {
    return this.props.noncriticalInfrastructure.map((element, i) => {
      return <li key={i}>${element[3]}</li>;
    });
  }

  criticalInfrastructureGenerate() {
    let generatedJSX = [];
    for (let i = 0; i < this.props.criticalInfrastructure.length; i++) {
      let generatedItem = (
          <div className="item">
            <div className="asset-name">{this.props.criticalInfrastructure[i][0]}</div>
            <div className="estimated-replacement-cost">Estimated Replacement Cost:       ${this.props.criticalInfrastructure[i][1]}</div>
            <div className="estimated-useful-life">Estimated Remaining Useful Life: {this.props.criticalInfrastructure[i][2]} years</div>
            <div className="reserve-fund-increase">Annual Increase to Reserve Fund for Eventual Replacement: ${this.props.criticalInfrastructure[i][3]}</div>
            <div className="monthly-increase-per-connection">Monthly Increase per Connection:  ${(this.props.criticalInfrastructure[i][3]/(12 * 550)).toFixed(2)}</div>
            <br/>
          </div>);
      generatedJSX.push(generatedItem);
    }
    return generatedJSX;
  }

  noncriticalInfrastructureGenerate() {
    let generatedJSX = [];
    for (let i = 0; i < this.props.noncriticalInfrastructure.length; i++) {
      let generatedItem = (
          <div className="item">
            <div className="asset-name">{this.props.noncriticalInfrastructure[i][0]}</div>
            <div className="estimated-replacement-cost">Estimated Replacement Cost:       ${this.props.noncriticalInfrastructure[i][1]}</div>
            <div className="estimated-useful-life">Estimated Remaining Useful Life: {this.props.noncriticalInfrastructure[i][2]} years</div>
            <div className="reserve-fund-increase">Annual Increase to Reserve Fund for Eventual Replacement: ${this.props.noncriticalInfrastructure[i][3]}</div>
            <div className="monthly-increase-per-connection">Monthly Increase per Connection:  ${(this.props.noncriticalInfrastructure[i][3]/(12 * 550)).toFixed(2)}</div>
          <br/>
        </div>);
      generatedJSX.push(generatedItem);
    }
    return generatedJSX;
  }

  render() {
    let {totalRevenue, totalCosts, revCostDiff, budgetStatus } = this.doMath();
    return (
      <div id="dash-analysis" className="house">
        <div className="rate-finance-status">
          <h3 className="section-title">Rate and Finances Status</h3>
            <div>Current Average Water Rate:  ${this.props.financialData.current_average_water_rate}</div>
            <div>{budgetStatus}  ${revCostDiff}</div>
            <div>Annual Contribution to Reserve Fund:  ${this.props.financialData.annual_savings_to_financial_reserves}</div>
        </div>
        <div className="infrastructure-analysis">
          <h3 className="section-title">Infrastructure Analysis</h3>
          <h4 className="crit-inf-title">Critical Infrastructure</h4>
            <div className="ui list critical-inftrastructure-list">
              <div>{this.criticalInfrastructureGenerate()}</div>
            </div>
          <h4 className="noncrit-inf-title">Noncritical Infrastructure</h4>
            <div className="ui list noncritical-inftrastructure-list">
              <div>{this.noncriticalInfrastructureGenerate()}</div>
            </div>
        </div>
      </div>
    );
  }
}
