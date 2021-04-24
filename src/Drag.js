import React, { useState } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photos";
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ pics }) => (
  <Gallery photos={pics} renderImage={props => <SortablePhoto {...props} />} />
));

function Drag() {
  const [pics, setpic] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setpic(arrayMove(pics, oldIndex, newIndex));
  };

  return (
    <div>
      <h2>Drag and Drop Cars</h2>
      <SortableGallery pics={pics} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
export default Drag
