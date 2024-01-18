import { langs } from '@uiw/codemirror-extensions-langs';
import { noctisLilacInit } from '@uiw/codemirror-theme-noctis-lilac';
import CodeMirror from '@uiw/react-codemirror';
import { CSSProperties } from 'react';

const theme = noctisLilacInit({
  settings: {
    caret: '',
    background: '#fff',
    gutterBackground: '#fff',
    lineHighlight: '#8a91991a',
  },
});

interface ICodeMirrorTextArea {
  value: string;
  language: string;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
  style?: CSSProperties;
  onChange?: (value: string) => void;
}

export function CodeMirrorTextArea({ style, language, ...rest }: ICodeMirrorTextArea) {
  const editorLanguage = language === 'json' ? langs.json() : langs.lezer();
  const mergedStyle = {
    fontFamily: 'monospace',
    ...style,
  };

  return <CodeMirror theme={theme} style={mergedStyle} extensions={[editorLanguage]} {...rest} />;
}
