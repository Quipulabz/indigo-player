import { Button } from '@src/ui/components/Button';
import { ControlsView } from '@src/ui/components/ControlsView';
import { ErrorView } from '@src/ui/components/ErrorView';
import { LoadingView } from '@src/ui/components/LoadingView';
import { StartView } from '@src/ui/components/StartView';
import { IActions, IData, ViewTypes } from '@src/ui/types';
import { withState } from '@src/ui/withState';
import { attachEvents, EventUnsubscribeFn } from '@src/ui/utils/attachEvents';
import cx from 'classnames';
import * as React from 'react';

interface MainProps {
  data: IData;
  actions: IActions;
}

export const Main = withState((props: MainProps) => (
  <div
    className={cx({
      'igui_state-active': props.data.visibleControls,
      'igui_state-volumecontrols-visible': props.data.isVolumeControlsVisible,
      'igui_state-volumecontrols-open': props.data
        .isVolumeControlsOpen,
    })}
  >
    {props.data.view === ViewTypes.ERROR && <ErrorView />}
    {props.data.view === ViewTypes.LOADING && <LoadingView />}
    {props.data.view === ViewTypes.START && <StartView />}
    {props.data.view === ViewTypes.CONTROLS && <ControlsView />}
  </div>
));
