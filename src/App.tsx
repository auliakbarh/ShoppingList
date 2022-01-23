import React from 'react';
import codePush, {CodePushOptions} from 'react-native-code-push';
import InitialContainer from '@/ui/containers/home';

interface Props {}

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

const App: React.FC<Props> = ({}) => {
  return <InitialContainer />;
};

export default codePush(codePushOptions)(App);
