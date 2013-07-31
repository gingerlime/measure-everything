require 'statsd'

$statsd = Statsd.new('82.196.8.168')

def authentication(status = :success, count = 1)
  key = "events.password.#{status}"
  puts "sending #{count} x #{key} to statsd"
  $statsd.count key, count
end

def random_authentication(status = :success, factor = 5)
  count = 1000
  while count > 0
    rand_count = (rand * factor).to_i
    count -= rand_count
    authentication(status, rand_count)
    sleep rand
  end
end

def measure_authentication
  $statsd.time('authentication') do
    authentication
  end
end







binding.pry
