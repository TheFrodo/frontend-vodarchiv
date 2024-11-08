import {
  Container,
  Text,
  Button,
  Drawer,
  Title,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import React, { useState } from "react";
import AdminChannelDrawer from "../../components/Admin/Channels/Drawer";
import AdminChannelsTable from "../../components/Admin/Channels/Table";
import AdminChannelTwitchChannelDrawer from "../../components/Admin/Channels/TwitchChannelDrawer";
import { Authorization, ROLES } from "../../components/ProtectedRoute";
import classes from "./channels.module.css"

const AdminChannelsPage = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [twitchDrawerOpened, setTwitchDrawerOpened] = useState(false);

  useDocumentTitle("VodArchiv - Admin - Kanäle");

  const closeDrawerCallback = () => {
    setDrawerOpened(false);
  };

  const closeTwitchDrawerCallback = () => {
    setTwitchDrawerOpened(false);
  };
  return (
    <Authorization allowedRoles={[ROLES.ARCHIVER, ROLES.EDITOR, ROLES.ADMIN]}>
      <div>
        <Container size="2xl">
          <div className={classes.header}>
            <div>
              <Title order={2}>Kanäle</Title>
            </div>
            <div className={classes.right}>
              <Button
                onClick={() => setDrawerOpened(true)}
                variant="outline"
                color="green"
                mr={5}
              >
                Create
              </Button>
              <Button
                onClick={() => setTwitchDrawerOpened(true)}
                variant="outline"
                color="violet"
              >
                Twitch Channel hinzufügen
              </Button>
            </div>
          </div>
          <AdminChannelsTable />
        </Container>
        <Drawer
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          title="Channel"
          padding="xl"
          size="xl"
          position="right"
        >
          <AdminChannelDrawer handleClose={closeDrawerCallback} mode="create" />
        </Drawer>
        <Drawer
          opened={twitchDrawerOpened}
          onClose={() => setTwitchDrawerOpened(false)}
          title="Füge einen Twitch Channel hinzu"
          padding="xl"
          size="xl"
          position="right"
        >
          <AdminChannelTwitchChannelDrawer
            handleClose={closeTwitchDrawerCallback}
          />
        </Drawer>
      </div>
    </Authorization>
  );
};

export default AdminChannelsPage;
