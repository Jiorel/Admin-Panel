import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export function PrivateRoute({
  component: Component,
  ...props
}: PrivateRouteProps) {
  const { user } = useAuth();
  return (
    <Route
      {...props}
      render={(props) => {
        if (user) return <Component {...props} />;
        return <Redirect to="/login" />;
      }}
    />
  );
}
