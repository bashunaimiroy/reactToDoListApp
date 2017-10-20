import React    from "react";
import template from "./todoList.jsx";

class todoList extends React.Component {
  render() {
    return template.call(this);
  }
}

export default todoList;
