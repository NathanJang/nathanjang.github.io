export default class Project {
  constructor({
    title,
    caption,
    description,
    iconPath,
    shouldMaskIcon,
    iconAltText,
    linkTitleText,
    href,
    route,
  }) {
    this.title = title;
    this.caption = caption;
    this.description = description;
    this.iconPath = iconPath;
    this.shouldMaskIcon = shouldMaskIcon;
    this.iconAltText = iconAltText;
    this.linkTitleText = linkTitleText;
    this.href = href;
    this.route = route;
  }
}
