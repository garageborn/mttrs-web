require 'active_support/all'

desc 'Run pronto'
task :lint do
  p '--------', ENV['CI_PULL_REQUEST']
  if ENV['CI_PULL_REQUEST'].blank?
    system('bundle exec pronto run -f github')
  else
    pull_request_id = `echo $CI_PULL_REQUEST | grep -o -E '[0–9]+$' | head -1 | sed -e 's/^0\+//'`
    puts '-----------pull_request_id', pull_request_id
    system("PULL_REQUEST_ID=#{ pull_request_id } bundle exec pronto run -f github_pr")
  end
end
