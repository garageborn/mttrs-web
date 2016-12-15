require 'active_support/all'

desc 'Run pronto'
task :lint do
  next if ENV['CI_PULL_REQUEST'].blank?
  system('bundle exec pronto run -f github_pr') || raise($?.to_s)
end
