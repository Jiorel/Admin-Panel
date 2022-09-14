import { Link } from "react-router-dom";
import "./AuthCard.scss";

interface AuthCardProps {
  title: string;
  link: string;
  linkTitle: string;
}

export function AuthCard({
  title,
  link,
  linkTitle,
  children,
}: React.PropsWithChildren<AuthCardProps>) {
  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <span className="auth-card__header__title">{title}</span>
        <Link className="auth-card__header__link" to={link}>
          {linkTitle}
        </Link>
      </div>
      {children}
    </div>
  );
}
