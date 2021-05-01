import { useState } from "react";
import type { ReactElement } from "react";
import Card from "components/Card/Card";

import AnimeModal from "./AnimeModal";

interface Props {
  title: string;
  image_url: string;
  synopsis: string;
  episodes: number;
  mal_id: number;
}
export default function AnimeItem({
  title,
  image_url,
  synopsis,
  episodes,
  mal_id,
}: Props): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDetailModalClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <Card
        title={title}
        imgUrl={image_url}
        description={synopsis}
        episodeCount={episodes}
        onDetailButtonClick={handleDetailModalClick}
      />
      {isModalOpen && (
        <AnimeModal id={mal_id} open={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
}
