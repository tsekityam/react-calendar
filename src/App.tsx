import * as React from "react";
import "./App.css";

import * as moment from "moment";
import BigCalendar from "react-big-calendar";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class App extends React.Component {
  public render() {
    return (
      <div>
        <BigCalendar />
      </div>
    );
  }
}

export default App;
