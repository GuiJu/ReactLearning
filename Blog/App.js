/**
 * Created by jutal on 16-11-8.
 */
var INFOS = [
  {date: "2016-11-8", content: "content1"},
  {date: "2016-11-9", content: "content2"},
  {date: "2016-11-10", content: "content3"},
  {date: "2016-11-11", content: "content4"}
];

/*整个App*/
var App = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <NavBar/>
        <Modal/>
        <PanelList infos={INFOS}/>
      </div>
    );
  }
});

/*面板主body组件*/
var PanelBody = React.createClass({
  render: function () {
    return (
      <div className="panel-body">
        {this.props.content}
      </div>
    );
  }
});

/*单个面板组件*/
var Panel = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-success">
            <div className="panel-heading">{this.props.heading}</div>
            <PanelBody content={this.props.content}/>
          </div>
        </div>
      </div>
    );
  }
});

/*面板列表组*/
var PanelList = React.createClass({
  render: function () {
    var panels = [];
    this.props.infos.forEach(function (info) {
      panels.push(<Panel heading={info.date} content={info.content}/>)
    })
    return (
      <div id="panelList">
        {panels}
      </div>
    );
  }
});

/*导航条主体*/
var NavBar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <NavBarHeader/>
          <NavBarCollapse/>
        </div>
      </nav>
    );
  }
});

/*导航条头部*/
var NavBarHeader = React.createClass({
  render: function () {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Summery</a>
      </div>
    );
  }
});

/*导航条内容*/
var NavBarCollapse = React.createClass({
  render: function () {
    return (
      <div className="collapse navbar-collapse" id="navbar-collapse">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
          <button className="btn btn-default navbar-btn navbar-right" data-toggle="modal" data-target="#mainModal">Add</button>
      </div>
    );
  }
});

/*模态框*/
var Modal = React.createClass({
  render: function () {
    return (
      <div className="modal fade" id="mainModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
              <h4 className="modal-title">Today's summary</h4>
            </div>

            <ModalBody/>

            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

/*模态框body*/
var ModalBody = React.createClass({
  render: function () {
    return (
      <div className="modal-body">
        <p>One fine body&hellip;</p>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById("app"));

