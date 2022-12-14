import { Switch, Route } from "react-router-dom";
import { Posts, Dashboard, PostForm } from "features";
import { Users } from "features/users";

import "./Content.scss";

export function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/posts/create" component={() => <PostForm />} />
        <Route path="/posts/edit/:id" component={() => <PostForm />} />
        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
}
