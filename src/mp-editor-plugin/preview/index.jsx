import React, {PureComponent} from 'react';
import './preview.pcss'


export default class WhitespacePreview extends PureComponent {
    render() {
        const { instance } = this.props;
        return (
            <div
            className={`bundle-whitespace-preview-design-component-whitespace-preview`}
            style={{ height: `${instance.height}px` }}
            />
        );
    }
}
    
