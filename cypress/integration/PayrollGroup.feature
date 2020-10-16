Feature: Payroll Group

    So that I can manage payrolls
    As a system administrator user
    I can create a new payroll group

    @payroll_group
    Scenario:
        Given I access the configuration options
        When I register this new payroll group
        Then I should see the new payroll group in the list
