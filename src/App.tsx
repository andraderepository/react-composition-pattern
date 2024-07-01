import React from 'react'
import { Notification } from './components/Notification';

import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

import './App.css';

function ImageCard(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img {...props} />
  )
}

function App() {
  return (
    <div className='container center'>
      <Notification.Card>
        <Notification.Image image={ImageCard} />
        <Notification.Content 
            desc='Você recebeu um convite para fazer parte da nossa empresa!'
            category='Convite'
            timePublish='3 min'
        />
        <Notification.Actions>
          <Notification.Action icon={ClearIcon} />
        </Notification.Actions>
      </Notification.Card>

      <Notification.Card>
        <Notification.Image image={ImageCard} />
        <Notification.Content 
            desc='Você recebeu um convite para fazer parte da nossa empresa!'
            category='Convite'
            timePublish='3 min'
        />
        <Notification.Actions>
          <Notification.Action icon={CheckIcon} />
        </Notification.Actions>
      </Notification.Card>

      <Notification.Card>
        <Notification.Image image={ImageCard} />
        <Notification.Content 
            desc='Você recebeu um convite para fazer parte da nossa empresa!'
            category='Convite'
            timePublish='3 min'
        />
        <Notification.Actions>
          <Notification.Action icon={ClearIcon} />
          <Notification.Action icon={CheckIcon} />
        </Notification.Actions>
      </Notification.Card>

      <Notification.Card>
        <Notification.Content 
            desc='Você recebeu um convite para fazer parte da nossa empresa!'
            category='Convite'
            timePublish='3 min'
        />
        <Notification.Actions>
        </Notification.Actions>
      </Notification.Card>
    </div>
  );
}

export default App;
