import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoDatalogicScannerViewProps } from './ExpoDatalogicScanner.types';

const NativeView: React.ComponentType<ExpoDatalogicScannerViewProps> =
  requireNativeView('ExpoDatalogicScanner');

export default function ExpoDatalogicScannerView(props: ExpoDatalogicScannerViewProps) {
  return <NativeView {...props} />;
}
