import LinkNextJS from 'next/link';
import LienStyle from './LinkStyle';

export default function Link({ children, href, ...props }) {
  return (
    <LinkNextJS href={href} passHref>
      <LienStyle {...props}>{children}</LienStyle>
    </LinkNextJS>
  );
}
