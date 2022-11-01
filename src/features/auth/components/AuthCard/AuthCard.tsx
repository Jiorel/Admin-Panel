import { Link } from "react-router-dom";
import "./AuthCard.scss";

interface AuthCardProps {
  title: string;
  link: string;
  linkTitle: string;
  error: string;
}

export function AuthCard({
  title,
  link,
  linkTitle,
  error,
  children,
}: React.PropsWithChildren<AuthCardProps>) {
  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h2 className="auth-card__header__title">{title}</h2>
        <Link className="auth-card__header__link" to={link}>
          {linkTitle}
        </Link>
      </div>
      {children}
      {error && <div className="auth-card__error">{error}</div>}
    </div>
  );
}
