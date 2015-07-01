class Hash
  def slice(keys)
    select {|k, _| keys.include?(k) }
  end
end
