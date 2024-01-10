
'use client';

import { Button } from 'flowbite-react';

export default function Logout() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </Button.Group>
      <Button.Group>
        <Button gradientMonochrome="info">Profile</Button>
        <Button gradientMonochrome="info">Settings</Button>
        <Button gradientMonochrome="info">Messages</Button>
      </Button.Group>
      <Button.Group>
        <Button gradientDuoTone="greenToBlue">Profile</Button>
        <Button gradientDuoTone="greenToBlue">Settings</Button>
        <Button gradientDuoTone="greenToBlue">Messages</Button>
      </Button.Group>
    </div>
  );
}
