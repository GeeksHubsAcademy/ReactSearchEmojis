import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import EmojiSearch from './containers/EmojiSearch';
import EmojiLike from './containers/EmojiLike';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={EmojiSearch} />
        <Route path="/likes" exact component={EmojiLike} />

      </Switch>
    </Fragment>
  );
}

export default App;
