import { Input } from '@/components/ui/input'

const Search = () => {
  return (
    <div className="absolute top-[98px] relative flex w-[360px] h-[36px] items-center">
      {' '}
      <img
        src="/search.svg"
        alt="search"
        className="absolute right-9 top-1/2 transform -translate-y-1/2 h-5 w-5"
      />
      <Input
        className="w-[340px] h-full rounded-[10px] border-[0.5px] py-1.5 pr-10 pl-3.5 bg-white placeholder:text-gray-400"
        type="search"
        style={{
          borderColor: 'var(--stroke)',
          boxShadow: '0px 4px 4px rgba(119, 119, 119, 0.09)',
        }}
      />
    </div>
  )
}

export default Search
