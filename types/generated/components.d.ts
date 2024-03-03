import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFeatureActionRow extends Schema.Component {
  collectionName: 'components_blocks_feature_action_rows';
  info: {
    displayName: 'Feature Action Row';
    description: '';
  };
  attributes: {
    children: Attribute.Component<'elements.feature-action', true>;
    object: Attribute.String & Attribute.Required;
    title: Attribute.String;
    numberOfItems: Attribute.String;
  };
}

export interface BlocksFeatureImageRow extends Schema.Component {
  collectionName: 'components_blocks_feature_image_rows';
  info: {
    displayName: 'Feature Row';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    children: Attribute.Component<'elements.feature-image', true>;
    showSlider: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    object: Attribute.String & Attribute.Required;
  };
}

export interface BlocksHeroRow extends Schema.Component {
  collectionName: 'components_blocks_hero_rows';
  info: {
    displayName: 'Hero Row';
    description: '';
  };
  attributes: {
    object: Attribute.String & Attribute.Required;
    category: Attribute.Component<'elements.product-category', true>;
    IconBox: Attribute.Component<'elements.hero-link-box', true>;
    request: Attribute.Component<'elements.req-for-registration'>;
    shipmentRate: Attribute.Component<'elements.shipment-rate'>;
  };
}

export interface BlocksProductRow extends Schema.Component {
  collectionName: 'components_blocks_product_rows';
  info: {
    displayName: 'Product Row';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    numberOfItems: Attribute.String;
    showSlider: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    object: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFeatureAction extends Schema.Component {
  collectionName: 'components_elements_feature_actions';
  info: {
    displayName: 'Feature Action';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    object: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    ButtonName: Attribute.String;
    ButtonLink: Attribute.String;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ElementsFeatureImage extends Schema.Component {
  collectionName: 'components_elements_feature_images';
  info: {
    displayName: 'Feature Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    object: Attribute.String & Attribute.Required;
  };
}

export interface ElementsHeroLinkBox extends Schema.Component {
  collectionName: 'components_elements_hero_link_boxes';
  info: {
    displayName: 'Hero Link Box';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    object: Attribute.String;
  };
}

export interface ElementsProductCategory extends Schema.Component {
  collectionName: 'components_elements_product_categories';
  info: {
    displayName: 'Product Category';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    category: Attribute.Component<'elements.product-sub-category', true>;
    icon: Attribute.Media;
    object: Attribute.String & Attribute.Required;
  };
}

export interface ElementsProductChildrenCategory extends Schema.Component {
  collectionName: 'components_elements_product_children_categories';
  info: {
    displayName: 'productChildrenCategory';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    icon: Attribute.Media;
    object: Attribute.String;
  };
}

export interface ElementsProductSubCategory extends Schema.Component {
  collectionName: 'components_elements_product_sub_categories';
  info: {
    displayName: 'ProductSubCategory';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    category: Attribute.Component<'elements.product-children-category', true>;
    icon: Attribute.Media;
    object: Attribute.String;
  };
}

export interface ElementsReqForRegistration extends Schema.Component {
  collectionName: 'components_elements_req_for_registrations';
  info: {
    displayName: 'Req For Registration';
  };
  attributes: {
    title: Attribute.String;
    object: Attribute.String;
  };
}

export interface ElementsShipmentRate extends Schema.Component {
  collectionName: 'components_elements_shipment_rates';
  info: {
    displayName: 'Shipment Rate';
  };
  attributes: {
    title: Attribute.String;
    object: Attribute.String;
  };
}

export interface SectionNoticeBar extends Schema.Component {
  collectionName: 'components_section_notice_bars';
  info: {
    displayName: 'Notice Bar';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    object: Attribute.String & Attribute.Required;
    bgColor: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.feature-action-row': BlocksFeatureActionRow;
      'blocks.feature-image-row': BlocksFeatureImageRow;
      'blocks.hero-row': BlocksHeroRow;
      'blocks.product-row': BlocksProductRow;
      'elements.feature-action': ElementsFeatureAction;
      'elements.feature-image': ElementsFeatureImage;
      'elements.hero-link-box': ElementsHeroLinkBox;
      'elements.product-category': ElementsProductCategory;
      'elements.product-children-category': ElementsProductChildrenCategory;
      'elements.product-sub-category': ElementsProductSubCategory;
      'elements.req-for-registration': ElementsReqForRegistration;
      'elements.shipment-rate': ElementsShipmentRate;
      'section.notice-bar': SectionNoticeBar;
    }
  }
}
