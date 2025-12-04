import { groq } from 'next-sanity'

// Query to get all campus life categories
export const campusLifeCategoriesQuery = groq`
  *[_type == "campusLifeCategory"] | order(title asc) {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt
  }
`

// Query to get a single category by slug with its sub-categories
export const campusLifeCategoryBySlugQuery = groq`
  *[_type == "campusLifeCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt,
    "subCategories": subCategories[]-> {
      _id,
      title,
      slug,
      image,
      "imageAlt": image.alt
    }
  }
`

// Query to get sub-categories by parent category slug with their first article
export const subCategoriesByCategorySlugQuery = groq`
  *[_type == "campusLifeSubCategory" && parentCategory->slug.current == $slug] | order(title asc) {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt,
    "parentCategory": parentCategory-> {
      _id,
      title,
      slug
    },
    "firstArticle": *[_type == "campusLifeArticle" && subCategory._ref == ^._id][0] {
      _id,
      slug
    }
  }
`

// Query to get a single sub-category by slug with its articles
export const subCategoryBySlugQuery = groq`
  *[_type == "campusLifeSubCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt,
    "parentCategory": parentCategory-> {
      _id,
      title,
      slug
    },
    "articles": articles[]-> {
      _id,
      title,
      slug
    }
  }
`

// Query to get a single article by slug
export const articleBySlugQuery = groq`
  *[_type == "campusLifeArticle" && slug.current == $id][0] {
    _id,
    title,
    slug,
    article,
    "galleryImages": galleryImages[] {
      asset,
      "alt": alt,
      "assetId": asset._ref
    },
    "subCategory": subCategory-> {
      _id,
      title,
      slug,
      "parentCategory": parentCategory-> {
        _id,
        title,
        slug
      }
    }
  }
`

// Query to get article by category slug and article slug
export const articleBySubCategoryAndIdQuery = groq`
  *[_type == "campusLifeArticle" && subCategory->parentCategory->slug.current == $categorySlug && slug.current == $articleSlug][0] {
    _id,
    title,
    slug,
    article,
    "galleryImages": galleryImages[] {
      asset,
      "alt": alt,
      "assetId": asset._ref
    },
    "subCategory": subCategory-> {
      _id,
      title,
      slug,
      "parentCategory": parentCategory-> {
        _id,
        title,
        slug
      }
    }
  }
`

// ========== EVENT QUERIES ==========

// Query to get all event categories
export const eventCategoriesQuery = groq`
  *[_type == "eventCategory"] | order(title asc) {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt
  }
`

// Query to get a single event category by slug with its sub-categories
export const eventCategoryBySlugQuery = groq`
  *[_type == "eventCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt,
    "subCategories": subCategories[]-> {
      _id,
      title,
      slug,
      image,
      "imageAlt": image.alt
    }
  }
`

// Query to get event sub-categories by parent category slug with their first article
export const eventSubCategoriesByCategorySlugQuery = groq`
  *[_type == "eventSubCategory" && parentCategory->slug.current == $slug] | order(title asc) {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt,
    "parentCategory": parentCategory-> {
      _id,
      title,
      slug
    },
    "firstArticle": *[_type == "eventArticle" && subCategory._ref == ^._id][0] {
      _id,
      slug
    }
  }
`

// Query to get a single event sub-category by slug with its articles
export const eventSubCategoryBySlugQuery = groq`
  *[_type == "eventSubCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    "imageAlt": image.alt,
    "parentCategory": parentCategory-> {
      _id,
      title,
      slug
    },
    "articles": articles[]-> {
      _id,
      title,
      slug
    }
  }
`

// Query to get event article by category slug and article slug
export const eventArticleBySubCategoryAndIdQuery = groq`
  *[_type == "eventArticle" && subCategory->parentCategory->slug.current == $categorySlug && slug.current == $articleSlug][0] {
    _id,
    title,
    slug,
    article,
    "galleryImages": galleryImages[] {
      asset,
      "alt": alt,
      "assetId": asset._ref
    },
    "subCategory": subCategory-> {
      _id,
      title,
      slug,
      "parentCategory": parentCategory-> {
        _id,
        title,
        slug
      }
    }
  }
`

