/**
 * Created by jutal on 16-10-22.
 */
var TestClickCompnent = React.createClass({

    handleClick: function (event) {
        var tipE = React.findDOMNode(this.refs.tip);
        if (tipE.style.display === 'none') {
            tipE.style.display = 'inline';
        } else {
            tipE.style.display = 'none';
        }
        event.stopPropagation();
        event.preventDefault();
    },

    render: function () {
        return (
            <div>
            <button onClick={this.handleClick}>显示|隐藏</button><span ref="tip">测试点击</span>
            </div>
        );
    }
});

var TestInputComponent = React.createClass({
    getInitialState: function () {
        return {
            inputContent: ''
        }
    },
    changeHandler: function (event) {
        this.setState({
            inputContent: event.target.value
        });

        event.preventDefault();
        event.stopPropagation();
    },

    render: function () {
        return(
            <div>
            <input type="text" onChange={this.changeHandler}/><span>{this.state.inputContent}</span>
        </div>
        );
    }
});

ReactDOM.render(
<div>
<TestClickCompnent/>
<TestInputComponent/>
</div>,
    document.getElementById('container')
);