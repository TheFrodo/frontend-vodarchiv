import { Button, Code, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";

const AdminChannelsDelete = ({ handleClose, channel }) => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const deleteChannel = useMutation({
    mutationKey: ["delete-channel"],
    mutationFn: () => {
      setLoading(true);
      return useApi(
        {
          method: "DELETE",
          url: `/api/v1/channel/${channel.id}`,
          withCredentials: true,
        },
        false
      )
        .then(() => {
          queryClient.invalidateQueries(["admin-channels"]);
          setLoading(false);
          showNotification({
            title: "Kanal gelöscht",
            message: "Der Kanal wurde erfolgreich gelöscht!",
          });
          handleClose();
        })
        .catch((err) => {
          setLoading(false);
        });
    },
  });

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Text weight={600} size="lg">
        Bist du dir sicher, dass du den folgenden Kanal löschen möchtest?
      </Text>
      <div>
        Kanal ID: <Code>{channel.id}</Code>
      </div>
      <div>
        Kanal Name: <Code>{channel.name}</Code>
      </div>
      <div>
        <Text mt={5} size="xs">
          Diese Aktion löscht keine Dateien, sondern lediglich nur den Kanal!
        </Text>
      </div>
      <div style={{ float: "right" }}>
        <Button
          onClick={() => deleteChannel.mutate()}
          color="red"
          loading={loading}
        >
          Löschen
        </Button>
      </div>
    </div>
  );
};

export default AdminChannelsDelete;
