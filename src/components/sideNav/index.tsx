import { Navigation, NavigationLink } from './styled';

function SideNav() {
  return (
    <Navigation>
      <ul>
        <li>
          <NavigationLink to="/">Files</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/">Favorites</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/">New File</NavigationLink>
        </li>
      </ul>
    </Navigation>
  );
}

export default SideNav;
