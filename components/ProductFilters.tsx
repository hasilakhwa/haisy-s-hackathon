
interface ProductFiltersProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onPriceSort: (direction: 'asc' | 'desc') => void;
}

export default function ProductFilters({ onSearch, onCategoryFilter, onPriceSort }: ProductFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <select
          onChange={(e) => onCategoryFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
        <select
          onChange={(e) => onPriceSort(e.target.value as 'asc' | 'desc')}
          className="p-2 border rounded"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
      </div>
    </div>
  )
}
