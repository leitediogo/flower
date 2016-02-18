/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});

var MyOtherComponent = React.createClass({
    render: function(){
        return (<b> teste my other component </b>);
    }
});

var MyPropsComponent = React.createClass ({
    render: function(){
        return(<b>props test ,{this.props.name}! </b> );
    }
});

var MyInitialStateComponent = React.createClass ({
    getInitialState: function(){
        return { count: 5}
    },
    render: function(){
    return (<h1>{this.state.count}</h1>);
}
});

var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

React.render(
        <Counter/>,
        document.getElementById('counter')
    );
