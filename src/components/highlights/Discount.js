import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd: 30
    }

    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage();
        }, 30)
    }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => this.percentage()}
          >
          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
          </Fade>
          
        <Slide right>
        <div className="discount_description">
            <h3>Purchase Tickets before June 20th</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              finibus nunc id tellus consectetur feugiat. Duis suscipit nec orci
              a pellentesque. Proin massa erat, molestie.
            </p>
          </div>

        </Slide>
          
        </div>
      </div>
    );
  }
}
