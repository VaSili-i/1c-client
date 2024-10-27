const interfaceConst = 'interface';

module.exports = (componentName) =>
  `import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import cls from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
    clsName?: string;
}

export function ${componentName} (props: ${componentName}Props) {
    const { className } = props;
    
    return (
        <div className={joinClassName(cls.${componentName}, {}, clsName)}>
           
        </div>
    );
}`;
