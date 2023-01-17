import { Navigation, NavigationLink, NavigationList } from './styled';

function SideNav() {
  return (
    <Navigation>
      <NavigationList>
        <li>
          <NavigationLink to="/">Files</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/">Favorites</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/">New File</NavigationLink>
        </li>
      </NavigationList>
    </Navigation>
  );
}

export default SideNav;
