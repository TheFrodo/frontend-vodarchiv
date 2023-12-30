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
import AdminWatchedDrawer from "../../components/Admin/Watched/Drawer";
import AdminWatchedTable from "../../components/Admin/Watched/Table";
import { Authorization, ROLES } from "../../components/ProtectedRoute";
import classes from "./watched.module.css"

const AdminWatchedPage = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [twitchDrawerOpened, setTwitchDrawerOpened] = useState(false);

  useDocumentTitle("Ganymede - Admin - Watched Channels");

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
              <Title order={2}>Watched Channels</Title>
            </div>
            <div className={classes.right}>
              <Button
                onClick={() => setDrawerOpened(true)}
                variant="outline"
                color="green"
                mr={5}
              >
                Add
              </Button>
            </div>
          </div>
          <AdminWatchedTable />
        </Container>
        <Drawer
          opened={drawerOpened}
          className={classes.watchedDrawer}
          onClose={() => setDrawerOpened(false)}
          title="Watched Channel"
          padding="xl"
          size="xl"
          position="right"
        >
          <AdminWatchedDrawer handleClose={closeDrawerCallback} mode="create" />
        </Drawer>
      </div>
    </Authorization>
  );
};

export default AdminWatchedPage;
