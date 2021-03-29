import { TransformOriginAnchorPosition } from '../../utils/calculations';

export type MenuItemProps = {
  text: string;
  icon?: () => React.ReactNode;
  onPress: () => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  /**
   * @deprecated typo here for compatibility
   */
  withSeperator?: boolean;
  withSeparator?: boolean;
};

export type MenuListProps = {
  items: MenuItemProps[];
};

export type MenuInternalProps = {
  items: MenuItemProps[];
  itemHeight: number;
  itemWidth: number;
  itemY: number;
  itemX: number;
  anchorPosition: TransformOriginAnchorPosition;
  menuHeight: number;
  transformValue: number;
};
