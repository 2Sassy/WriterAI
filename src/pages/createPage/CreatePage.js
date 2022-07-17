import React from "react";

export const CreatePage = () => {
  return (
    <div class="writerai-create-page">
      <div className="writerai-header">
        <div className="writerai-header__input-name">
          <input
            type="text"
            className="writerai-header__document-name"
            placeholder="Document Title"
          />
        </div>
        <div className="writerai-header__buttons">
          <button className="writerai-button writerai-header__button--secondary">
            Preview
          </button>
          <button className="writerai-button writerai-header__button--primary">
            Save
          </button>
        </div>
      </div>
      <div className="writerai-document">
        <div className="writerai-writer">
          <textarea className="writerai-writer__input" placeholder="Write your content here" />
        </div>
        <div className="writerai-generate">
          <textarea className="writerai-generate__input" placeholder="Write something to generate content using AI" />
          <button className="writerai-button writerai-generate__button">Generate</button>
        </div>
      </div>
    </div>
  );
};