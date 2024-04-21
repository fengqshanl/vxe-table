import { VXETableComponent } from './component'

/**
 * 工具提示
 */
export declare class VxeTooltip extends VXETableComponent {
  /**
   * 绑定值
   */
  value?: boolean;
  /**
   * 触发方式
   */
  trigger?: 'manual' | 'hover' | 'click' | '' | null;
  /**
   * 主题样式
   */
  theme?: 'dark' | 'light' | '' | null;
  /**
   * 显示内容
   */
  content?: string | ((params: any) => any);
  /**
   * 自定义堆叠顺序
   */
  zIndex?: string | number;
  /**
   * 是否显示箭头
   */
  isArrow?: boolean;
  /**
   * 鼠标是否可进入到提示框中
   */
  enterable?: boolean;
  /**
   * 鼠标移出后延时多少才隐藏提示框
   */
  leaveDelay?: number;
}
export class Tooltip extends VxeTooltip {}
