import React, {PureComponent} from 'react';
import ControlGroup from './ControlGroup';
import {Slider}  from 'zent';
import './editor.pcss';
const prefix = 'bundle-whitespace';
export default class WhitespaceEditor extends PureComponent {
  render() {
    const { instance: value, prefix } = this.props;

    return (
      <div className={`${prefix}-design-component-whitespace-editor`}>
        <ControlGroup
          label="空白高度:"
          className={`${prefix}-design-component-whitespace-editor__height`}
        >
          <Slider
            min={10}
            max={100}
            value={value.height}
            onChange={this.onHeightChange}
            withInput={false}
          />
          <span>{value.height} 像素</span>
        </ControlGroup>
      </div>
    );
  }

  onHeightChange = (value) => {
    const {design, instance} = this.props;
    design.modifyInstance(instance, {height: value});
  }
}
