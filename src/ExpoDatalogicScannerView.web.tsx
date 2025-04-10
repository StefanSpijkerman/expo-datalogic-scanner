import * as React from 'react';

import { ExpoDatalogicScannerViewProps } from './ExpoDatalogicScanner.types';

export default function ExpoDatalogicScannerView(props: ExpoDatalogicScannerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
